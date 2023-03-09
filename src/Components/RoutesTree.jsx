import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import Navigation from "./Navigation";

export default function RoutesTree() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
