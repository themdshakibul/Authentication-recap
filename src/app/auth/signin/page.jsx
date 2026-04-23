"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

const SigninPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/deshbord",
    });

    console.log("form data submited :", { data, error });
  };

  return (
    <section>
      <div className="flex items-center justify-center h-150">
        <Form
          className="bg-base-200 border border-gray-300 rounded-lg shadow-sm p-10 flex w-100 flex-col gap-4"
          onSubmit={onSubmit}
        >
          {/* email */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          {/* pasword */}
          <TextField className="w-full max-w-100" name="password">
            <Label>Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full max-w-100"
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
          </TextField>

          {/* submit btn */}
          <div className="flex gap-2">
            <Button type="submit">
              <Check />
              Submit
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default SigninPage;
