<?php


$user=array(
	'USER_LOGIN'=>'bankrotstvovsem@bk.ru', #Ваш логин (электронная почта)
	'USER_HASH'=>'189ccc3167410cfe5913d0bfa03c7096' #Хэш для доступа к API (смотрите в профиле пользователя)
);

$subdomain='new56f6a3557f222'; #Наш аккаунт - поддомен
$link='https://'.$subdomain.'.amocrm.ru/private/api/auth.php?type=json';
$curl=curl_init(); #Сохраняем дескриптор сеанса cURL


curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');
curl_setopt($curl,CURLOPT_URL,$link);
curl_setopt($curl,CURLOPT_POST,true);
curl_setopt($curl,CURLOPT_POSTFIELDS,http_build_query($user));
curl_setopt($curl,CURLOPT_HEADER,false);
curl_setopt($curl,CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
curl_setopt($curl,CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);
curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);
$out=curl_exec($curl); #Инициируем запрос к API и сохраняем ответ в переменную
$code=curl_getinfo($curl,CURLINFO_HTTP_CODE); #Получим HTTP-код ответа сервера
curl_close($curl); #Заверашем сеанс cURL

$summ=0;

$responsible_user_id=770055;
$date=date("d.m.Y");

$sdelka=array(
    'name'=>'Заявка с сайта',
    'status_id'=>140,
    'price'=>$summ,
	'responsible_user_id'=>$responsible_user_id
  );


  

if ($mess){
	$sdelka['custom_fields'][]=array(
		'id'=>198922,
		'values'=>array(
			array(
				'value'=>$mess
			)
		)
	);	
}

if ($frmid){
	$sdelka['custom_fields'][]=array(
		'id'=>198924,
		'values'=>array(
			array(
				'value'=>$frmid
			)
		)
	);	
}

if ($form){
	$sdelka['custom_fields'][]=array(
		'id'=>198926,
		'values'=>array(
			array(
				'value'=>$form
			)
		)
	);	
}

if ($dolh){
	$sdelka['custom_fields'][]=array(
		'id'=>198928,
		'values'=>array(
			array(
				'value'=>$dolh
			)
		)
	);	
}
if ($syd){
	$sdelka['custom_fields'][]=array(
		'id'=>198930,
		'values'=>array(
			array(
				'value'=>$syd
			)
		)
	);	
}


if ($location){
	$sdelka['custom_fields'][]=array(
		'id'=>198932,
		'values'=>array(
			array(
				'value'=>$location
			)
		)
	);	
}




$leads['request']['leads']['add'][]=$sdelka;



$link='https://'.$subdomain.'.amocrm.ru/private/api/v2/json/leads/set';
$curl=curl_init(); #Сохраняем дескриптор сеанса cURL
curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');
curl_setopt($curl,CURLOPT_URL,$link);
curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');
curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($leads));
curl_setopt($curl,CURLOPT_HTTPHEADER,array('Content-Type: application/json'));
curl_setopt($curl,CURLOPT_HEADER,false);
curl_setopt($curl,CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
curl_setopt($curl,CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);
curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);
$out=curl_exec($curl); #Инициируем запрос к API и сохраняем ответ в переменную
$code=curl_getinfo($curl,CURLINFO_HTTP_CODE);


if ($code==200){
	$Response=json_decode($out,true);
	$Response=$Response['response']['leads']['add'];
	$idsdelka=$Response[0][id];

	
	if ($name==''){$name=$phone;}


	$contact=array(
	  'name'=>$name,
	  'linked_leads_id'=>array($idsdelka)
	);


	if ($phone){
		$contact['custom_fields'][]=array(
			'id'=>193616,
			'values'=>array(
				array(
					'value'=>$phone,
					 'enum'=>'MOB'
				)
			)
		);
	}


			
	$set['request']['contacts']['add'][]=$contact;

	#Формируем ссылку для запроса
	$link='https://'.$subdomain.'.amocrm.ru/private/api/v2/json/contacts/set';
	$curl=curl_init(); #Сохраняем дескриптор сеанса cURL
	#Устанавливаем необходимые опции для сеанса cURL
	curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
	curl_setopt($curl,CURLOPT_USERAGENT,'amoCRM-API-client/1.0');
	curl_setopt($curl,CURLOPT_URL,$link);
	curl_setopt($curl,CURLOPT_CUSTOMREQUEST,'POST');
	curl_setopt($curl,CURLOPT_POSTFIELDS,json_encode($set));
	curl_setopt($curl,CURLOPT_HTTPHEADER,array('Content-Type: application/json'));
	curl_setopt($curl,CURLOPT_HEADER,false);
	curl_setopt($curl,CURLOPT_COOKIEFILE,dirname(__FILE__).'/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
	curl_setopt($curl,CURLOPT_COOKIEJAR,dirname(__FILE__).'/cookie.txt'); #PHP>5.3.6 dirname(__FILE__) -> __DIR__
	curl_setopt($curl,CURLOPT_SSL_VERIFYPEER,0);
	curl_setopt($curl,CURLOPT_SSL_VERIFYHOST,0);

	$out=curl_exec($curl); #Инициируем запрос к API и сохраняем ответ в переменную
	$code=curl_getinfo($curl,CURLINFO_HTTP_CODE);

}


?>