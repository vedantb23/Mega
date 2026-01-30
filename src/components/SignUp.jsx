import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Input, Logo } from "./index.js";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, seterror] = useState("");

    const create=async (data) => {
            seterror("")
            try {
                    
            } catch (error) {
                seterror(error.message)
            }
    }
    
  return <div></div>;
};

export default SignUp;
