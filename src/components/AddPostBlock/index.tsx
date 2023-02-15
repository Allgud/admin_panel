import { Button } from "antd";
import * as styles from './styles'

const AddPostBlock = () => {
    return (
        <div style={styles.buttonBlockStyles}>
            <Button style={styles.buttonStyles}>Add Post</Button>
        </div>
    );
}
export default AddPostBlock