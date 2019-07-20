import React from "react"
import { render, hydrate } from "react-dom"
import App from "../shared/App"

// Hydrate only if in prod
if(process.env.NODE_ENV === "production") {
    console.log("hydrating")
    hydrate(<App/>, document.getElementById("root"))
} else {
    console.log("rendering")
    render(<App/>, document.getElementById("root"))
}