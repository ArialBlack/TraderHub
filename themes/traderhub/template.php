<?php

function traderhub_preprocess_node(&$vars) {
  if($vars['view_mode'] == 'teaser') {
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__teaser';  // node--[type|nodeid]--teaser.tpl.php
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->nid . '__teaser';
  }

  if($vars['view_mode'] == 'full') {
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->type . '__full';  // node--[type|nodeid]--full.tpl.php
    $vars['theme_hook_suggestions'][] = 'node__' . $vars['node']->nid . '__full';
  }

}

function traderhub_preprocess_page(&$variables) {
  drupal_add_js(drupal_get_path('theme', 'traderhub') .'/js/track-cookies.js', 'file');
  drupal_add_js(drupal_get_path('theme', 'traderhub') .'/js/create-object.js', 'file');
}