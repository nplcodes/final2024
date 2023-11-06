    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.selectedUser);
    const userId = user[0]?._id;

    const ApproveUser = async() =>{
              try {
                const response = await axios.put(`/approve/${userId}`);
                dispatch(authActions.approveUser(response.data))
              } catch (error) {
                console.error('Error:', error);
              }
         }