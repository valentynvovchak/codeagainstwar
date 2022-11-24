const urls = {
    checkCode: 'http://localhost:5000' // TODO: change this URI
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
