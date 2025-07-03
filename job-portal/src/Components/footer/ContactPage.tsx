// ContactPage.tsx
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Container,
  Paper,
  Text,
  Title,
  TextInput,
  Textarea,
  
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    initialValues: { name: "", email: "", message: "" },
    validate: {
      name: (v) => (v.trim() ? null : "Name is required"),
      email: (v) => (/^\S+@\S+\.\S+$/.test(v) ? null : "Valid email is required"),
      message: (v) => (v.trim() ? null : "Message cannot be empty"),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    console.log("Contact form submitted:", values);
    setSubmitted(true);
    form.reset();
  };

  return (
    <Container size="sm" my="xl">
      <Title  mb="md">Contact Us</Title>
      <Text  mb="lg">
        Have questions or need help? Our team is here to assist you.
      </Text>

      <Paper p="md" shadow="sm" mb="md">
        <div style={{ marginBottom: 12 }}>
          <FontAwesomeIcon icon={faPhone} />{" "}
          <Text component="span">+1‑800‑JOB‑MATCH</Text>
        </div>
        <div style={{ marginBottom: 12 }}>
          <FontAwesomeIcon icon={faEnvelope} />{" "}
          <Text component="span">support@jobmatcher.com</Text>
        </div>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
          <Text component="span">123 Career St, Talent City, NY 10001</Text>
        </div>
      </Paper>

      <Paper p="md" shadow="sm">
        {submitted ? (
          <Text className="text-center text-bright-sun-400" >
            Thank you! We’ll get back to you shortly.
          </Text>
        ) : (
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Name"
              placeholder="Your name"
              withAsterisk
              mb="sm"
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="you@mail.com"
              withAsterisk
              mb="sm"
              {...form.getInputProps("email")}
            />
            <Textarea
              label="Message"
              placeholder="How can we help?"
              withAsterisk
              mb="sm"
              minRows={4}
              {...form.getInputProps("message")}
            />
            <Button fullWidth type="submit" mt="md">
              Send Message
            </Button>
          </form>
        )}
      </Paper>
    </Container>
  );
};

export default ContactPage;
