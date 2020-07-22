<?php

$url = 'http://oauth.vk.com/authorize';

$permissions = array ('offline', 'status', 'wall', 'audio', '&v=5.120');

$request_params = array (
 'client_id' => '7546235',
 'redirect_uri' => 'https://oauth.vk.com/blank.html',
 'response_type' => 'token',
 'display' => 'page',
 // 'scope' => implode(',', $permissions),
);

$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_URL, $url.'?'.http_build_query($request_params));

$response = curl_exec($ch);
$data = json_decode($response, true);
curl_close($ch);

echo '<pre>';
print_r($data);

// $create_url = file_get_contents('https://oauth.vk.com/authorize?' . http_build_query($request_params));
// $create_url = urldecode($create_url);
// var_dump($create_url);
// ?>

<!-- <a href='https://oauth.vk.com/authorize?client_id=7546235&redirect_uri=https%3A%2F%2Foauth.vk.com%2Fblank.html&response_type=token&display=page&scope=offline%2Cstatus%2Cwall%2Caudio%2C%26v%3D5.120' target='_blank'>Авторизация ВК</a> -->