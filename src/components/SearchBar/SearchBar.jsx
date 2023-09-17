import {Button, Form} from "react-bootstrap";
import styles from  './SearchBar.module.scss'
export const SearchBar = () => {
    return (
        <>
            <Form>
                <Form.Group className={styles.searchContainer}>
                    <Form.Control className={styles.searchInput} size={'lg'} type='text' placeholder='Enter your city ...'></Form.Control>
                    <Button size={'sm'} variant='primary'>Search</Button>
                </Form.Group>
            </Form>
        </>
    )
}