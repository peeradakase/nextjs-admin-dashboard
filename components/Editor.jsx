import dynamic from 'next/dynamic'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from "../components/Editor.module.css";


const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
)

export default function EditorComponent() {
  return (
    <Editor
      wrapperClassName={styles.wrapperClass}
      editorClassName={styles.editorClass}
      toolbarClassName={styles.toolbarClass}
    />
  )
}
