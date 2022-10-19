import fetch from "node-fetch"
import { promises as fsPromises } from 'fs'

fetch('https://animechan.vercel.app/api/quotes/anime?title=Boku%20No%20Hero%20Academia')
  .then(response=> response.json())
  .then(data=> fsPromises.writeFile("./data.json", JSON.stringify(data)))
  .catch(error=> console.error(error))


