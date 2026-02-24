type PaymentFailedMessageProps = {
  message: string;
};

export function PaymentFailedMessage({ message }: PaymentFailedMessageProps) {
  return (
    <p className="mb-12 max-w-md text-lg leading-relaxed text-muted">
      {message}
    </p>
  );
}

