import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";

export default function Info() {
  return (
    <>
      <div className="flex flex-col flex-wrap items-center justify-around self-stretch">
        <h2 className="title">Information</h2>
        <div className="my-10 flex w-4/5 flex-wrap items-center justify-around gap-5">
          <Card className="w-40 flex-initial">
            <CardHeader>
              <CardTitle>Stylist</CardTitle>
              <CardDescription className="h-7 flex-1">
                Coat care for all breeds
              </CardDescription>
            </CardHeader>
            <CardContent className="h-16 flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-12"
              >
                <path
                  fillRule="evenodd"
                  d="M8.128 9.155a3.751 3.751 0 1 1 .713-1.321l1.136.656a.75.75 0 0 1 .222 1.104l-.006.007a.75.75 0 0 1-1.032.157 1.421 1.421 0 0 0-.113-.072l-.92-.531Zm-4.827-3.53a2.25 2.25 0 0 1 3.994 2.063.756.756 0 0 0-.122.23 2.25 2.25 0 0 1-3.872-2.293ZM13.348 8.272a5.073 5.073 0 0 0-3.428 3.57 5.08 5.08 0 0 0-.165 1.202 1.415 1.415 0 0 1-.707 1.201l-.96.554a3.751 3.751 0 1 0 .734 1.309l13.729-7.926a.75.75 0 0 0-.181-1.374l-.803-.215a5.25 5.25 0 0 0-2.894.05l-5.325 1.629Zm-9.223 7.03a2.25 2.25 0 1 0 2.25 3.897 2.25 2.25 0 0 0-2.25-3.897ZM12 12.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clipRule="evenodd"
                />
                <path d="M16.372 12.615a.75.75 0 0 1 .75 0l5.43 3.135a.75.75 0 0 1-.182 1.374l-.802.215a5.25 5.25 0 0 1-2.894-.051l-5.147-1.574a.75.75 0 0 1-.156-1.367l3-1.732Z" />
              </svg>
            </CardContent>
            <CardFooter className="h-14 flex-auto">
              <p className="font-body text-base font-bold text-txt dark:text-background">
                We have highly skilled stylists
              </p>
            </CardFooter>
          </Card>
          <Card className="w-40 flex-initial">
            <CardHeader>
              <CardTitle>Bathing</CardTitle>
              <CardDescription className="h-7 flex-1">
                Skin and coat cleaning
              </CardDescription>
            </CardHeader>
            <CardContent className="h-16 flex-1">
              <svg
                className="size-12 fill-txt"
                viewBox="0 0 475.56 475.56"
                stroke="#000000"
                strokeWidth="0.004755580000000001"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="3.8044640000000003"
                >
                  <g id="XMLID_136_">
                    <path
                      id="XMLID_137_"
                      d="M259.988,404.297c0,14.408,11.67,26.079,26.078,26.079s26.078-11.671,26.078-26.079 c0-9.43-9.647-20.494-17.311-31.621c-4.198-6.094-13.164-6.092-17.368-0.001C269.8,383.78,259.988,394.887,259.988,404.297z"
                    ></path>
                    <path
                      id="XMLID_138_"
                      d="M331.95,343.465c0,14.408,11.67,26.077,26.078,26.077s26.078-11.669,26.078-26.077 c0-9.425-9.646-20.491-17.312-31.619c-4.198-6.095-13.165-6.093-17.369-0.002C341.761,322.951,331.95,334.06,331.95,343.465z"
                    ></path>
                    <path
                      id="XMLID_139_"
                      d="M188.026,343.465c0,14.408,11.67,26.077,26.078,26.077c14.408,0,26.078-11.669,26.078-26.077 c0-9.425-9.646-20.491-17.311-31.619c-4.198-6.095-13.166-6.093-17.369-0.002C197.838,322.951,188.026,334.06,188.026,343.465z"
                    ></path>
                    <path
                      id="XMLID_140_"
                      d="M258.763,111.628c-54.178,9.808-95.189,48.058-97.801,94.514c-0.063,1.226,0.365,2.428,1.211,3.319 c0.843,0.892,2.021,1.4,3.247,1.4h241.294c1.225,0,2.404-0.509,3.23-1.4c0.845-0.892,1.29-2.093,1.227-3.319 c-2.69-47.77-45.932-86.887-102.401-95.294C298.931,48.16,244.722,0,179.304,0c-72.36,0-131.22,58.868-131.22,131.219v319.884 c0,13.51,10.954,24.454,24.454,24.454c13.502,0,24.454-10.944,24.454-24.454V131.219c0-45.39,36.921-82.311,82.311-82.311 C217.624,48.908,249.64,75.361,258.763,111.628z"
                    ></path>
                    <path
                      id="XMLID_141_"
                      d="M411.171,234.001H160.962c-9.012,0-16.302,7.3-16.302,16.302c0,9.005,7.29,16.303,16.302,16.303h250.209 c9.012,0,16.303-7.298,16.303-16.303C427.474,241.302,420.183,234.001,411.171,234.001z"
                    ></path>
                  </g>
                </g>
                <g id="SVGRepo_iconCarrier">
                  <g id="XMLID_136_">
                    <path
                      id="XMLID_137_"
                      d="M259.988,404.297c0,14.408,11.67,26.079,26.078,26.079s26.078-11.671,26.078-26.079 c0-9.43-9.647-20.494-17.311-31.621c-4.198-6.094-13.164-6.092-17.368-0.001C269.8,383.78,259.988,394.887,259.988,404.297z"
                    ></path>
                    <path
                      id="XMLID_138_"
                      d="M331.95,343.465c0,14.408,11.67,26.077,26.078,26.077s26.078-11.669,26.078-26.077 c0-9.425-9.646-20.491-17.312-31.619c-4.198-6.095-13.165-6.093-17.369-0.002C341.761,322.951,331.95,334.06,331.95,343.465z"
                    ></path>
                    <path
                      id="XMLID_139_"
                      d="M188.026,343.465c0,14.408,11.67,26.077,26.078,26.077c14.408,0,26.078-11.669,26.078-26.077 c0-9.425-9.646-20.491-17.311-31.619c-4.198-6.095-13.166-6.093-17.369-0.002C197.838,322.951,188.026,334.06,188.026,343.465z"
                    ></path>
                    <path
                      id="XMLID_140_"
                      d="M258.763,111.628c-54.178,9.808-95.189,48.058-97.801,94.514c-0.063,1.226,0.365,2.428,1.211,3.319 c0.843,0.892,2.021,1.4,3.247,1.4h241.294c1.225,0,2.404-0.509,3.23-1.4c0.845-0.892,1.29-2.093,1.227-3.319 c-2.69-47.77-45.932-86.887-102.401-95.294C298.931,48.16,244.722,0,179.304,0c-72.36,0-131.22,58.868-131.22,131.219v319.884 c0,13.51,10.954,24.454,24.454,24.454c13.502,0,24.454-10.944,24.454-24.454V131.219c0-45.39,36.921-82.311,82.311-82.311 C217.624,48.908,249.64,75.361,258.763,111.628z"
                    ></path>
                    <path
                      id="XMLID_141_"
                      d="M411.171,234.001H160.962c-9.012,0-16.302,7.3-16.302,16.302c0,9.005,7.29,16.303,16.302,16.303h250.209 c9.012,0,16.303-7.298,16.303-16.303C427.474,241.302,420.183,234.001,411.171,234.001z"
                    ></path>
                  </g>
                </g>
              </svg>
            </CardContent>
            <CardFooter className="h-14 flex-auto">
              <p className="font-body text-base font-bold text-txt dark:text-background">
                Your pet clean and free of parasits
              </p>
            </CardFooter>
          </Card>
          <Card className="w-40 flex-initial">
            <CardHeader>
              <CardTitle>Pet Care</CardTitle>
              <CardDescription className="h-7 flex-1">
                Health care and treatment
              </CardDescription>
            </CardHeader>
            <CardContent className="h-16 flex-1">
              <svg
                viewBox="-2.5 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
                className="size-12 fill-txt"
              >
                <path d="M11.56 10.11v2.046a3.827 3.827 0 1 1-7.655 0v-.45A3.61 3.61 0 0 1 .851 8.141V5.25a1.682 1.682 0 0 1 .763-1.408 1.207 1.207 0 1 1 .48 1.04.571.571 0 0 0-.135.368v2.89a2.5 2.5 0 0 0 5 0V5.25a.57.57 0 0 0-.108-.334 1.208 1.208 0 1 1 .533-1.018 1.681 1.681 0 0 1 .683 1.352v2.89a3.61 3.61 0 0 1-3.054 3.565v.45a2.719 2.719 0 0 0 5.438 0V10.11a2.144 2.144 0 1 1 1.108 0zm.48-2.07a1.035 1.035 0 1 0-1.035 1.035 1.037 1.037 0 0 0 1.036-1.035z" />
              </svg>
            </CardContent>
            <CardFooter className="h-14 flex-auto">
              <p className="font-body text-base font-bold text-txt dark:text-background">
                Best vets at your disposal
              </p>
            </CardFooter>
          </Card>
          <Card className="w-40 flex-initial">
            <CardHeader>
              <CardTitle>Surgery</CardTitle>
              <CardDescription className="h-7 flex-1">
                For emergency and others
              </CardDescription>
            </CardHeader>
            <CardContent className="h-16 flex-1">
              <svg className="size-12 fill-txt" viewBox="0 0 490.075 490.075">
                <g>
                  <g>
                    <path
                      d="M350,199.275l132.2-131.9c10.5-10.5,10.5-27.6,0-38.1s-27.6-10.5-38.1,0l-175,175l-245,245H9.7c-5.4,0-9.7,4.3-9.7,9.7
			s4.3,9.7,9.7,9.7h371.8c5.4,0,9.7-4.3,9.7-9.7s-4.3-9.7-9.7-9.7H67.6C218.4,408.975,350,199.275,350,199.275z"
                    />
                  </g>
                </g>
              </svg>
            </CardContent>
            <CardFooter className="h-14 flex-auto">
              <p className="font-body text-base font-bold text-txt dark:text-background">
                High-end equipment for best results
              </p>
            </CardFooter>
          </Card>
          <Card className="w-40 flex-initial">
            <CardHeader>
              <CardTitle>Consulting</CardTitle>
              <CardDescription className="h-7 flex-1">
                Training for owner and pets
              </CardDescription>
            </CardHeader>
            <CardContent className="h-16 flex-1">
              <svg viewBox="0 0 64 64" className="size-12 fill-txt">
                <title>Dog</title>
                <g transform="translate(1.000000, 6.000000)">
                  <path
                    className="fill-none stroke-txt"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    d="M34.7,42c-2.8,0-6.4,4.9-6.4,8h-5.2
		c-1.7,0-3.2,1.6-3.2,3.5l0,0c0,2,1.4,3.4,3.2,3.4h22.5C58.6,57,62.1,45.3,61,37.1l0,0c0,0-11.1,11.8-14.1,11.8
		c0.1-12.2-8.9-23.7-14.8-29C28.8,16.9,27.9,9,27.9,9V4.8c0-4.3-0.3-8.9-1.2-9.5c-1.6-1.1-4.4,4.6-6.7,4.6c-11.7,0-10,8-12.5,8H2.2
		C0,7.9,0,9.7,0,10.9c0.2,3.3,1.9,6,10,6c2,0,5.1,2.8,5.1,7.9v26.1H15h-1c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h15.75"
                  />
                  <path
                    className="fill-none stroke-txt"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    d="M20.9,38v8.8"
                  />
                  <path
                    className="fill-none stroke-txt"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    d="M1,14h6"
                  />
                </g>
              </svg>
            </CardContent>
            <CardFooter className="h-14 flex-auto">
              <p className="font-body text-base font-bold text-txt dark:text-background">
                Better wellness for your pet
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
