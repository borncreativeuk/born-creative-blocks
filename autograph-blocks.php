<?php
/**
 * Plugin Name: Autograph-Blocks
 * Description: Blocks!
 * Version: 0.0.1
 * Author: BornCreative
 *
 * @package autograph-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
wp_register_script(
    'autograph-block',
    plugins_url( 'build/index.js', __FILE__ ),
    $asset_file['dependencies'],
    $asset_file['version']
);


function autograph_block_editor_assets() {
    wp_enqueue_script(
        'autograph-block',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
};

// and then, we actually have the function run when the editor loads...
add_action( 'enqueue_block_editor_assets', 'autograph_block_editor_assets' );