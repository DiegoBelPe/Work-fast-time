/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function FormError({ error }) {
  return (
    <>
      {error && (
      <p className="mt-2 text-sm text-red-600 dark:text-red-500">
        <span className="font-medium">Oops!</span>
        {' '}
        {error.message}
      </p>
      )}
      {' '}
    </>
  );
}

export default FormError;
