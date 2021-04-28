<?php
/**
Plugin Name: VCWB Elements API example
Plugin URI: http://visualcomposer.com
Description: VCWB Elements API example
Version: 1.0
Author: Visual Composer
Author URI: http://visualcomposer.com
 */
function myExamplePlugin_registerEditorScrips()
{
    wp_register_script(
        'vcv:myExamplePlugin:addon:editor:settingsPanel',
        plugin_dir_url(__FILE__) . 'dist/index.js',
        [],
        '1.0',
        true
    );
}
add_action('init', 'myExamplePlugin_registerEditorScrips');
add_action(
    'vcv:api',
    function () {
        $filters = vchelper('Filters');
        $events = vchelper('Events');
        // listen for editor loading data request action:
        $filters->listen(
            'vcv:dataAjax:getData',
            function ($response, $payload) {
                $exampleInsights = get_post_meta($payload['sourceId'], '_vcv-exampleInsights', true);
                if (!empty($exampleInsights)) {
                    $response['exampleInsights'] = $exampleInsights;
                }
                return $response; // must return response
            }
        );
        // listen for editor saving request action:
        $filters->listen(
            'vcv:dataAjax:setData',
            function ($response, $payload) {
                $requestHelper = vchelper('Request');
                $exampleInsights = $requestHelper->input('exampleInsights');
                $sourceId = $payload['sourceId'];
                update_post_meta($sourceId, '_vcv-exampleInsights', $exampleInsights);
                return $response; // must return response
            }
        );
        // listen for editor render action:
        $events->listen(
            'vcv:frontend:render',
            function ($sourceId) {
                wp_enqueue_script('vcv:myExamplePlugin:addon:editor:settingsPanel');
            }
        );
    }
);