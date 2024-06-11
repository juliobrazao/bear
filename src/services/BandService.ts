import axios from "axios";
import { delaySimulator } from "../utils/DelaySimulator";
import { futureDateSimulator } from "../utils/FutureDateSimulator";

const ENDPOINT = process.env.REACT_APP_BE_ENDPOINT;

export type Band = {
  name: string;
  owner: string;
  endOfContract: number;
};

export default class BandService {
  static async createBand({ name, owner }: Partial<Band>) {
    return axios
      .post(`${ENDPOINT}/bands`, {
        name,
        owner,
        endOfContract: new Date(
          new Date().getTime() + futureDateSimulator()
        ).getTime(),
      })
      .then((response) => response.data);
  }

  static async readBands() {
    await delaySimulator(3000);
    return axios.get(`${ENDPOINT}/bands`).then((response) => response.data);
  }
}
