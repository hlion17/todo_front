/**
 * 현재일시를 반환하는 함수
 * 서버 API 일시 형식과 동기화 될 수 있는 형식으로 반환
 * @returns {string} 현재일시
 */
const getCurrentDateTime = function () {
    return String().concat(
        new Date().getFullYear() + '-',
        (new Date().getMonth() + 1).toString().padStart(2, '0') + '-',
        new Date().getDate().toString().padStart(2, '0') + 'T',
        new Date().getHours().toString().padStart(2, '0') + ':',
        new Date().getMinutes().toString().padStart(2, '0') + ':',
        new Date().getSeconds().toString().padStart(2, '0'),
    );
}

/**
 * 날짜 형식 변환 Type01 Method
 * - 0000년 00월 00일 0요일
 * @param localDateTime 서버 API 일시 포멧의 날짜
 * @returns {string} 변환일시 문자열
 */
const getDateTimeType01 = function (localDateTime) {
    if (localDateTime.length < 19) return;

    const dayArr = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

    const year = localDateTime.substring(0, 4);
    const month = localDateTime.substring(5, 7);
    const date = localDateTime.substring(8, 10);

    // const hour = localDateTime.substring(11, 13);
    // const minute = localDateTime.substring(14, 16);
    // const second = localDateTime.substring(17, 19);

    const dayIndex = new Date(year + '-' + month + '-' + date).getDay();

    return String().concat(
        year, '년 ', month, '월 ', date, '일 ', dayArr[dayIndex]
    );
}

export default {
    install(Vue) {
        Vue.config.globalProperties.$getCurrentDateTime = getCurrentDateTime();
        Vue.config.globalProperties.$getDateTimeType01 = getDateTimeType01;
    }
}