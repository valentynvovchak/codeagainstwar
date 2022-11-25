import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import { ArrowSmLeftIcon } from "@heroicons/react/solid";
import Editor from "./helpers/Editor";
import Requests from "../caw_requests";

const ALL_PASSED_MSG = "All tests passed! You're genius!"
const FAILURES_PRESENT_MSG = "There are some failures:( Fix them and try again!"

const baseStyle = {
  border: '1px solid rgb(31, 41, 55)',
  backgroundColor: 'white'
}

const centerConsoleContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}
const loading_src = '/loading.gif'

function setLoadingCircle(consoleElement) {
  consoleElement.innerHTML = `<img src=${loading_src}>`
}

function testView(test) {
  return `<span style= "color: ${test.status === 'passed' ? 'green' : 'red'}" }}> ${test.description} </span><br>`
}

function errorView(error) {
  return `<span style= "color: red" }}> ${error}</span><br>`
}

function displayResults(data, consoleElement) {
  let html = 'Results:<br>'
  let all_passed = true;

  if (data.tests) {
    for (let test of data.tests) {
      html += testView(test)

      if (test.status === 'failed') {
        all_passed = false;
      }

      if (test.message) {
        html += `   Error: ${test.message}<br>`
      }
    }

    html += all_passed ? ALL_PASSED_MSG : FAILURES_PRESENT_MSG
  }
  else {
    html += errorView(data.error)
  }

  consoleElement.innerHTML = html
}

async function sendCode(editorRef, consoleRef, challengeId) {
  setLoadingCircle(consoleRef.current)

  let code = editorRef.current.editor.getValue()

  let data = await (await Requests.checkCode(code, challengeId)).json();

  displayResults(data, consoleRef.current);
}

function Challenge() {
  const editorRef = useRef()
  const consoleRef = useRef()
  const challengeId = useParams().id;

  const [challenge, setChallenge] = useState('');

  useEffect(() => {
    Requests.getChallenge(setChallenge, challengeId)
  }, [])

  const userFriendlyTitle = `Complete this ${challenge.difficulty} challenge '${challenge.title}' to earn ${challenge.cost}¢`

  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-blue-700 to-white relative">
        <Link to="/challenges">
          <ArrowSmLeftIcon className="h-10 absolute left-16 top-9 text-white cursor-pointer sm:left-8" />
        </Link>
        <p className="text-white text-2xl font-semibold px-8 pl-32 pt-10 sm:pl-20">
          { userFriendlyTitle }
        </p>
        <div className="bg-white rounded-2xl m-10 pl-5 mx-12 box-border flex flex-row-reverse sm:flex-col-reverse md:flex-col-reverse">
          <div className="pl-20 mr-20 w-3/4 flex flex-col mt-2">
            <p className="font-semibold text-xl border-b-2 border-black inline-block mb-1">
              Description:
            </p>
            <p className="font-semibold text-xl w-full sm:text-lg">
              { challenge.description }
            </p>
            <div ref={consoleRef} className="bg-gray-100 w-lg h-72 my-4 rounded-3xl pl-6 pt-6 resize-none" style={{ ...baseStyle, ...centerConsoleContentStyle }}>
              Ready? Click 'Check' to prove you're a pro!
            </div>
          </div>
          <div className="w-5/6 mt-6 flex flex-col self-center">
            <div className="bg-gray-200 rounded-3xl relative" style={baseStyle}>
              <div className="bg-gray-800 w-full h-16 rounded-t-3xl relative">
                <button className="bg-blue-700 rounded-full text-white px-9 py-1 absolute top-4 right-14 text-base font-medium active:scale-90 transition duration-150 text-center sm:text-sm sm:right-4 sm:px-3"
                  onClick={() => sendCode(editorRef, consoleRef, challenge.task)}
                >
                  Check
                </button>
                <div className=" bg-blue-700 rounded-full h-5 w-5 absolute left-8 top-5"></div>
                <div className="bg-gray-100 rounded-full h-5 w-5 absolute left-16 top-5"></div>
              </div>
              <div className="rounded-3xl">
                <Editor ref={editorRef} />
                {/* br is used here as temporary fix for bug with bottom corners of editor container*/}
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenge;
