<?php
/**
 * Plugin Name: Autograph Blocks Plugin
 * Author: Born Creative
 * Version: 0.0.1
 */
  
function load_blocks() {
  wp_enqueue_script(
    'case-study-header-block',
    plugin_dir_url(__FILE__) . 'case-study-header-block.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'load_blocks');