		//ȡ��cookie
function getCookie(name) {
 var nameEQ = name + "=";
 var ca = document.cookie.split(';'); //��cookie�ָ����
 for(var i=0;i < ca.length;i++) {
 var c = ca[i]; //ȡ���ַ���
 while (c.charAt(0)==' ') { //�ж�һ���ַ�����û��ǰ���ո�
 c = c.substring(1,c.length); //�еĻ����ӵڶ�λ��ʼȡ
 }
 if (c.indexOf(nameEQ) == 0) { //�����������Ҫ��name
 return unescape(c.substring(nameEQ.length,c.length)); //���벢��ȡ����Ҫֵ
 }
 }
 return false;
}
//���cookie
function clearCookie(name) {
 setCookie(name, "", -1);
}
//����cookie
function setCookie(name, value, seconds) {
 seconds = seconds || 0; //seconds��ֵ��ֱ�Ӹ�ֵ��û��Ϊ0�������php��һ����
 var expires = "";
 if (seconds != 0 ) { //����cookie����ʱ��
 var date = new Date();
 date.setTime(date.getTime()+(seconds*1000));
 expires = "; expires="+date.toGMTString();
 }
 document.cookie = name+"="+escape(value)+expires+"; path=/"; //ת�벢��ֵ
}