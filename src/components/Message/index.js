const Message = props => {
  const {message} = props
  return <h1 className="Message">{message}</h1>
}
Message.defaultProps = {message: 'Please Login'}

export default Message
