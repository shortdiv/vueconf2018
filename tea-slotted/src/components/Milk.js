
export default {
  functional: true,
  render: (h, { data, children }) => (
    <div class="milk" {...data}>
      {children}
    </div>
  ),
};
