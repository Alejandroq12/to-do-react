function TodoCounter({ total, completed }) {
  return (
    <h1>
      You have completed {completed} out of {total} tasks
    </h1>
  );
}

export { TodoCounter };
