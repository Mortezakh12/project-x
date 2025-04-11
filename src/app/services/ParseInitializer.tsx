"use client";
import { useEffect } from "react";
import { initializeParse } from "@/app/services/ParseService";

export function ParseInitializer() {
  useEffect(() => {
    initializeParse();
  }, []);

  return null;
}