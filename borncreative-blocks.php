<?php
/**
 * Plugin Name: borncreative-blocks
 * Description: Blocks!
 * Version: 0.0.1
 * Author: borncreative
 *
 * @package borncreative-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function borncreative_block_editor_assets() {
    
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
    wp_register_script(
        'borncreative-block',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

    // Enqueue block editor styles
    wp_register_style(
        'borncreative-block/stylesheets',
        plugins_url( 'assets/dist/style.css', __FILE__ ),
        [ 'wp-edit-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/dist/style.css' ) 
    );


};

// and then, we actually have the function run when the editor loads...
add_action( 'init', 'borncreative_block_editor_assets' );




/**
 * Enqueue view scripts
 */
function borncreative_block_view_assets() {
    if ( is_admin() ) {
        return;
    }

    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_enqueue_script(
        'borncreative-block',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
}

add_action( 'enqueue_block_assets', 'borncreative_block_view_assets' );