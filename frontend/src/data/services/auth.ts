import { getStrapiURL } from "@/lib/utils";
import type { TStrapiResponse, TImage } from "@/types";
import { actions } from "@/data/actions";
import qs from "qs";

type TRegisterUser = {
  username: string;
  password: string;
  email: string;
};

type TLoginUser = {
  identifier: string;
  password: string;
};

type TAuthUser = {
  id: number;
  documentId: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  image?: TImage;
  credits?: number;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type TAuthResponse = {
  jwt: string;
  user: TAuthUser;
};

type TAuthServiceResponse = TAuthResponse | TStrapiResponse<null>;

// Type guard functions
export function isAuthError(
  response: TAuthServiceResponse
): response is TStrapiResponse<null> {
  return "error" in response;
}

export function isAuthSuccess(
  response: TAuthServiceResponse
): response is TAuthResponse {
  return "jwt" in response;
}

const baseUrl = getStrapiURL();

export async function registerUserService(
  userData: TRegisterUser
): Promise<TAuthServiceResponse | undefined> {
  const url = new URL("/api/auth/local/register", baseUrl);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
    });

    const data = (await response.json()) as TAuthServiceResponse;
    console.dir(data, { depth: null });
    return data;
  } catch (error) {
    console.error("Registration Service Error:", error);
    return undefined;
  }
}

export async function loginUserService(
  userData: TLoginUser
): Promise<TAuthServiceResponse> {
  const url = new URL("/api/auth/local", baseUrl);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...userData }),
    });

    return response.json() as Promise<TAuthServiceResponse>;
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}