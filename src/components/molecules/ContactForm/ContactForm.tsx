import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SubmitHandler, useForm } from "react-hook-form";

import { useTheme } from "styled-components";

import { Box, Button, Form, Input, Loader, TextArea, Typography } from "@atoms";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const theme = useTheme();
  const { t }: { t: (key: string) => string } = useTranslation();

  const [status, setStatus] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = async (data, event) => {
    if (!isValid) {
      event?.preventDefault();
      return;
    }
    const response = await fetch("https://formspree.io/f/meoenezp", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      setStatus(t("SUCCESS_MESSAGE"));
      reset();

      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } else {
      setStatus(t("ERROR_MESSAGE"));
    }
  };

  return (
    <Form
      onSubmit={(e) => {
        if (!isValid) {
          e.preventDefault();
          return;
        }
        handleSubmit(onSubmit)(e);
      }}
    >
      <Box>
        <Input
          aria-label={t("FULL_NAME")}
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
          type="text"
          placeholder={t("FULL_NAME")}
          {...register("name", { required: t("NAME_REQUIRED"), minLength: 2 })}
          hasError={Boolean(errors.name)}
        />
        {errors.name && !isValid && (
          <Typography
            id="name-error"
            role="alert"
            as="p"
            color={theme.color.error}
            fontSize={theme.fontSize.body}
            fontWeight={theme.fontWeight.regular}
            margin={`${theme.spacing.xxs} 0 0 0`}
          >
            {errors.name.message}
          </Typography>
        )}
      </Box>
      <Box>
        <Input
          type="email"
          aria-label={t("EMAIL")}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          placeholder={t("EMAIL")}
          {...register("email", {
            required: t("EMAIL_REQUIRED"),
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: t("EMAIL_INVALID"),
            },
          })}
          hasError={Boolean(errors.email)}
        />
        {errors.email && !isValid && (
          <Typography
            as="p"
            id="email-error"
            role="alert"
            color={theme.color.error}
            fontSize={theme.fontSize.body}
            fontWeight={theme.fontWeight.regular}
            margin={`${theme.spacing.xxs} 0 0 0`}
          >
            {errors.email.message}
          </Typography>
        )}
      </Box>
      <Box>
        <TextArea
          placeholder={t("YOUR_MESSAGE")}
          aria-label={t("YOUR_MESSAGE")}
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          {...register("message", {
            required: t("MESSAGE_REQUIRED"),
            minLength: {
              value: 100,
              message: t("MESSAGE_MIN"),
            },
            maxLength: {
              value: 1000,
              message: t("MESSAGE_MAX"),
            },
          })}
          hasError={Boolean(errors.message)}
        />
        {errors.message && !isValid && (
          <Typography
            as="p"
            id="message-error"
            role="alert"
            fontSize={theme.fontSize.body}
            fontWeight={theme.fontWeight.regular}
            color={theme.color.error}
          >
            {errors.message.message}
          </Typography>
        )}
      </Box>

      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        aria-disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? <Loader /> : t("SEND")}
      </Button>
      {status && (
        <Typography
          as="p"
          aria-live="polite"
          fontSize={theme.fontSize.body}
          fontWeight={theme.fontWeight.regular}
          color={theme.color.textTertiary}
        >
          {status}
        </Typography>
      )}
    </Form>
  );
};
