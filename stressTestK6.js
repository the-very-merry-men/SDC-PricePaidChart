import { check, sleep } from 'k6';
import http from 'k6/http';

let desiredRPS = 30000; // total RPS for the test

// maximum requests executed by one VU per second, determined by experimentation.
// You can adjust this up/down depending on the performance of system you are testing.
//virtual users 
let RPSperVU = 300;

let VUsRequired = Math.round(desiredRPS / RPSperVU);

export let options = {
  vus: VUsRequired,
  duration: '1m',
};

let baseUrl = 'http://localhost:3111';

export default function() {
  let iterationStart = new Date().getTime(); // timestamp in ms

  for (let i of Array(RPSperVU).keys()) { // your URL(s) goes here.
    // if you add multiple URLs here, your RPS will be multiplied. (3 urls = 3x RPS)
    // if you plan on testing multiple endpoints, consider VU method rather than RPS method
    // different endpoints can have vastly different RPS.
    http.get(`${baseUrl}/api/stocks/${Math.floor(Math.random() * 10000000)}`);
  }

  let iterationDuration = (new Date().getTime() - iterationStart) / 1000;
  let sleepTime = 1 - iterationDuration; // 1 second minus time spent on request execution

  if (sleepTime > 0) {
    sleep(sleepTime);
  }
}