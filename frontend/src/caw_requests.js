const HOST = "https://codeagainstwar.online" // process.env.REACT_APP_BACKEND_HOST  // dotenv package is needed here

const urls = {
    checkCode: `${HOST}/api/checker/`
}

function checkCode(code, taskId) {
    let data = new FormData();
    data.append("code", code);
    data.append("task_id", taskId);

    return fetch(urls.checkCode, {
        method: 'POST',
        body: data
    })
}

export default checkCode;
