import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: grey,
      padding: theme.spacing(8, 0, 6)
    }
}))

export default useStyles;