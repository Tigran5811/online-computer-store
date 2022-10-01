import { addUser, deleteUserName, deleteUserIndex } from './add-delete-user.js';

(async () => {
    await addUser('Daniel', '1111');
    await deleteUserName('Daniel');
    await deleteUserIndex(0);
}
)();
