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