import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDVkeR_lPhkzD2Fh2fkSnzDRhk_D60YDE8",
  authDomain: "travel-bundhu.firebaseapp.com",
  projectId: "travel-bundhu",
  storageBucket: "travel-bundhu.appspot.com",
  messagingSenderId: "689234626810",
  appId: "1:689234626810:web:c57e88acae6bef8fe2a143",
  measurementId: "G-CGJ7PS881T"
};

export const app = initializeApp(firebaseConfig);
export const firebaseDb = getFirestore(app);

export async function getPostData() {
  const feedColumn = collection(firebaseDb, 'feedPosts');
  const feedSnapshot = await getDocs(feedColumn);
  const postsList = feedSnapshot.docs.map(doc => {
    console.log(doc.data(), "doc")
    return doc.data()});
  return postsList;
}

export async function setPostData(postData) {
    const postsList = await getPostData()

    await setDoc(doc(firebaseDb, "feedPosts", "posts"), {
        [0]: {
            ...postsList[0],
            posts: {
                ...postsList[0].posts,
                [postsList[0].posts.length]: postData
            }
        }
    });
}