const HOST = "https://codeagainstwar.online" // process.env.REACT_APP_BACKEND_HOST  // dotenv package is needed here

const urls = {
    checkCode:      `${HOST}/api/checker/`,
    getChallenges:  `${HOST}/api/core/challenges/`
}

class Requests {
    static checkCode(code, taskId) {
        let data = new FormData();
        data.append("code", code);
        data.append("task_id", taskId);

        return fetch(urls.checkCode, {
            method: 'POST',
            body: data
        })
    }

    static getChallenges(callback) {
        const sortById = (a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)

        fetch(urls.getChallenges, {
            method: 'GET'
        })
        .then(result => result.json())
        .then(challenges => callback(challenges.sort(sortById)))
    }

    static getChallenge(callback, id) {
        fetch(`${urls.getChallenges}${id}`)
        .then(result => result.json())
        .then(challenge => callback(challenge))
    }

}
export default Requests;
