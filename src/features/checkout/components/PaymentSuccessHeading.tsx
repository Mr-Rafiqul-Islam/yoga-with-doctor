type PaymentSuccessHeadingProps = {
  /** Set when purchase details are available; omit for generic confirmation copy. */
  productTitle?: string;
};

export function PaymentSuccessHeading({ productTitle }: PaymentSuccessHeadingProps) {
  return (
    <div className="mb-10 space-y-4 text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight text-foreground dark:text-white md:text-5xl">
        Payment Successful!
      </h1>
      <p className="mx-auto max-w-md text-lg leading-relaxed text-muted">
        {productTitle ? (
          <>
            Thank you for your purchase. You now have access to{" "}
            <br className="hidden sm:block" />
            <span className="font-semibold text-primary">{productTitle}</span>.
          </>
        ) : (
          <>Thank you for your purchase.</>
        )}
      </p>
    </div>
  );
}
