<?php
 /*
  Plugin name: Born Creative Blocks
  Plugin URI: https://github.com/borncreativeuk/born-creative-blocks
  Description: plugin with various blocks
  Author: Born Creative
  Author URI: https://www.born-creative.co.uk/
  Version: 0.1
  License: GPL v3 or later
  License URI: https://www.gnu.org/licenses/gpl-3.0.html

  @package borncreative-blocks

  Born Creative Blocks is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  any later version.
 
  Born Creative Blocks is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.
 
  You should have received a copy of the GNU General Public License
  along with Born Creative Blocks. If not, see https://www.gnu.org/licenses/gpl-3.0.html.
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
