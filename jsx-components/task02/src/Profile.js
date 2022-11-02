const Profile = (props) => {
  return (
    <main id='content' role='main' className='base'>
      {props.name ? (
        <h1>{props.name}'s React Page</h1>
      ) : (
        <h1>Just a react page</h1>
      )}
      {props.bio ? <p>{props.bio}</p> : <p>No bio</p>}
    </main>
  )
}

export default Profile
