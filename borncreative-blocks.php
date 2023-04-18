<?php
/**
 * Plugin Name: borncreative-blocks
 * Description: Blocks!
 * Version: 0.0.1
 * Plugin URI: https://www.born-creative.co.uk
 * Author: BORN CREATIVE
 * Author URI: https://www.born-creative.co.uk
 *
 * @package borncreative-blocks
 */


// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
wp_register_script(
    'borncreative-block',
    plugins_url( 'build/index.js', __FILE__ ),
    $asset_file['dependencies'],
    $asset_file['version']
);


function borncreative_block_editor_assets() {
    wp_enqueue_script(
        'borncreative-block',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
};

// and then, we actually have the function run when the editor loads...
add_action( 'enqueue_block_editor_assets', 'borncreative_block_editor_assets' );


// Enqueue block editor styles
wp_register_style(
    'borncreative-block-stylesheets',
    plugins_url( 'build/index.css', __FILE__ ),
    [ 'wp-edit-blocks' ],
    filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' ) 
);


function borncreative_block_assets() {
    wp_enqueue_style(
        'borncreative-block-stylesheets',
        plugins_url( 'build/index.css', __FILE__ ),
        [ 'wp-edit-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' ) 
    );
};

// and then, we actually have the function run when the editor loads...
add_action( 'enqueue_block_assets', 'borncreative_block_assets' );


// Register the custom block category
function register_born_creative_blocks_category( $categories, $post ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'born-creative-blocks',
                'title' => __( 'Born Creative Blocks', 'born-creative' ),
                'icon'  => 'wordpress',
            ),
        )
    );
}
add_filter( 'block_categories', 'register_born_creative_blocks_category', 10, 2 );
