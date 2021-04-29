// 1st task

function perform(...params) {
    let paramsArray = [...params].slice ( 0, [...params].slice ( -1 )[0] );
    const functionSearch = [...params].find ( param => typeof param === "function" );
    paramsArray = functionSearch ( paramsArray.split ( "," ) );

    return {
        paramsArray,
        functionSearch,
        then(...params) {
            const modifiedArray = [...params].slice ( 0, [...params].slice ( -1 )[0] )
            this.functionSearch = [...params].find ( param => typeof param === "function" );
            this.paramsArray = this.functionSearch ( ...modifiedArray, this.paramsArray );
            return this;
        }
    }
}


