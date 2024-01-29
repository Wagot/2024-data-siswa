import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey : "AIzaSyAC9R3lx2-sNaMtILOa_6_e_xzBxk2aYRA" , 
  authDomain : "contoh-proyek-53f21.firebaseapp.com" , 
  projectId : "contoh-proyek-53f21" , 
  penyimpananBucket : "contoh-proyek-53f21.appspot.com" , 
  pesanSenderId : "930407288764" , 
  appId : "1:930407288764:web:98b983922a95a62a8e25b9" 
};

const app = initializeApp(firebaseConfig);
const db =getFirestore(app);

export async function ambilDaftarSiswa () {
  const siswaRef = collection(db,"Siswa");
  const q = query(siswaRef,orderBy("Nama"));
  const querySnapshot = await getDocs(q);
  
  let retval = [];
  querySnapshot.forEach(() => {
    rerval.push({ id: doc.id, nama: doc.data().nama });
  }
    )
    return retval;
}