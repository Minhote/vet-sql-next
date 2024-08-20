"use client";

import { Switch } from "@/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { RadioGroup, RadioGroupItem } from "@/ui/radio-group";
import { Label } from "@/ui/label";
import { useState, useRef } from "react";

export default function Pricing() {
  const [totalValue, setTotalValue] = useState<number>(10);
  const trainingValue = useRef<"none" | "dog" | "cat" | "equine">("none");
  const surgeryValue = useRef<
    "none" | "general" | "ortopedic" | "soft-tissue" | "dental" | "emergency"
  >("none");
  const valuesOfServices = {
    shower: 10,
    deworming: 20,
    styling: 20,
    training: {
      none: 0,
      dog: 20,
      cat: 40,
      equine: 100,
    },
    surgery: {
      none: 0,
      general: 30,
      ortopedic: 50,
      "soft-tissue": 80,
      dental: 30,
      emergency: 60,
    },
  };

  return (
    <>
      <h2 className="title">Pricing</h2>
      <Card className="min-w-80 max-w-96">
        <CardHeader>
          <CardTitle className="text-2xl">All of our services</CardTitle>
          <CardDescription className="text-xl">
            Interact to see the price depending on the quantity of services
          </CardDescription>
        </CardHeader>
        <CardContent className="my-4 flex flex-col items-stretch gap-2">
          <div className="flex grow items-center justify-between rounded border border-txt p-2">
            <p className="text-xl font-normal text-txt">Consult</p>
            <Switch checked disabled />
          </div>
          <div className="flex grow items-center justify-between rounded border border-txt p-2">
            <p className="text-xl font-normal text-txt">Shower</p>
            <Switch
              onCheckedChange={(e) => {
                if (e) {
                  setTotalValue((v) => v + valuesOfServices.shower);
                } else {
                  setTotalValue((v) => v - valuesOfServices.shower);
                }
              }}
            />
          </div>
          <div className="flex grow items-center justify-between rounded border border-txt p-2">
            <p className="text-xl font-normal text-txt">Deworming</p>
            <Switch
              onCheckedChange={(e) => {
                if (e) {
                  setTotalValue((v) => v + valuesOfServices.deworming);
                } else {
                  setTotalValue((v) => v - valuesOfServices.deworming);
                }
              }}
            />
          </div>
          <div className="flex grow items-center justify-between rounded border border-txt p-2">
            <p className="text-xl font-normal text-txt">Styling services</p>
            <Switch
              onCheckedChange={(e) => {
                if (e) {
                  setTotalValue((v) => v + valuesOfServices.styling);
                } else {
                  setTotalValue((v) => v - valuesOfServices.styling);
                }
              }}
            />
          </div>
          <div className="flex grow items-center justify-between rounded border border-txt p-2">
            <div className="basis-1/2">
              <p className="text-xl font-normal text-txt">
                Training consultancy
              </p>
              <p className="text-base font-normal text-background">
                Depends on animal
              </p>
            </div>
            <RadioGroup
              defaultValue="none"
              className="basis-1/2"
              value={trainingValue.current}
              onValueChange={(e) => {
                switch (e) {
                  case "none":
                    setTotalValue(
                      (v) =>
                        v - valuesOfServices.training[trainingValue.current],
                    );
                    trainingValue.current = "none";
                    break;
                  case "dog":
                    setTotalValue(
                      (v) =>
                        v -
                        valuesOfServices.training[trainingValue.current] +
                        valuesOfServices.training.dog,
                    );
                    trainingValue.current = "dog";
                    break;
                  case "cat":
                    setTotalValue(
                      (v) =>
                        v -
                        valuesOfServices.training[trainingValue.current] +
                        valuesOfServices.training.cat,
                    );
                    trainingValue.current = "cat";
                    break;
                  case "equine":
                    setTotalValue(
                      (v) =>
                        v -
                        valuesOfServices.training[trainingValue.current] +
                        valuesOfServices.training.equine,
                    );
                    trainingValue.current = "equine";
                    break;
                }
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="r1" />
                <Label htmlFor="r1">None</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dog" id="r2" />
                <Label htmlFor="r2">Dog</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cat" id="r3" />
                <Label htmlFor="r3">Cat</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="equine" id="r4" />
                <Label htmlFor="r4">Equine</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex grow items-center justify-between rounded border border-txt p-2">
            <div className="basis-1/2">
              <p className="text-xl font-normal text-txt">Surgery</p>
              <p className="text-base font-normal text-background">
                Depends on type
              </p>
            </div>
            <RadioGroup
              defaultValue="none"
              className="basis-1/2"
              value={surgeryValue.current}
              onValueChange={(e) => {
                switch (e) {
                  case "none":
                    setTotalValue(
                      (v) => v - valuesOfServices.surgery[surgeryValue.current],
                    );
                    surgeryValue.current = "none";
                    break;
                  case "general":
                    setTotalValue(
                      (v) =>
                        v -
                        valuesOfServices.surgery[surgeryValue.current] +
                        valuesOfServices.surgery.general,
                    );
                    surgeryValue.current = "general";
                    break;
                  case "ortopedic":
                    setTotalValue(
                      (v) =>
                        v -
                        valuesOfServices.surgery[surgeryValue.current] +
                        valuesOfServices.surgery.ortopedic,
                    );
                    surgeryValue.current = "ortopedic";
                    break;
                  case "soft-tissue":
                    setTotalValue(
                      (v) =>
                        v -
                        valuesOfServices.surgery[surgeryValue.current] +
                        valuesOfServices.surgery["soft-tissue"],
                    );
                    surgeryValue.current = "soft-tissue";
                    break;
                  case "dental":
                    setTotalValue(
                      (v) =>
                        v -
                        valuesOfServices.surgery[surgeryValue.current] +
                        valuesOfServices.surgery.dental,
                    );
                    surgeryValue.current = "dental";
                    break;
                  case "emergency":
                    setTotalValue(
                      (v) =>
                        v -
                        valuesOfServices.surgery[surgeryValue.current] +
                        valuesOfServices.surgery.emergency,
                    );
                    surgeryValue.current = "emergency";
                    break;
                }
              }}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="none" id="s1" />
                <Label htmlFor="s1">None</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="general" id="s2" />
                <Label htmlFor="s2">General</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="ortopedic" id="s3" />
                <Label htmlFor="s3">Ortopedic</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="soft-tissue" id="s4" />
                <Label htmlFor="s4">Soft tissue</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="dental" id="s5" />
                <Label htmlFor="s5">Dental</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="emergency" id="s6" />
                <Label htmlFor="s6">Emergency</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <p className="text-2xl font-bold text-txt">Total</p>
          <p className="text-3xl font-bold text-accent-900">
            {`$ ${totalValue.toString()}`}
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
