import React, {useState, propTypes} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import {CardContainer} from './ProfilerElements'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
    gridContainer: {

        marginTop: '3.2rem',
        marginLeft: '.25rem',
        marginRight: '.25rem',
        backgroundColor: '#010606'
    },
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    minWidth: 320,
    position: 'relative',
    boxShadow: '0 8px 24px 0 rgba(0,0,0,0.12)',
    overflow: 'visible',
    borderRadius: '1.5rem',
    transition: '0.4s',
    '&:hover': {
      transform: 'translateY(-2px)',
      '& $shadow': {
        bottom: '-1.5rem',
      },
      '& $shadow2': {
        bottom: '-2.5rem',
      },
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 0,
      display: 'block',
      width: '100%',
      bottom: -1,
      height: '100%',
      borderRadius: '1.5rem',
      backgroundColor: 'rgba(0,0,0,0.08)',
    },
  },
  
  media: {
    height: 10,
    paddingTop: '56.25%', // 16:9
  },
  joinCSA: {
    backgroundColor: '#fff !important',
    color: '#fb703c',
    boxShadow: '0 2px 6px #d0efef',
    borderRadius: 12,
    minWidth: 120,
    minHeight: 42,
    textTransform: 'initial',
    fontSize: '0.875rem',
    fontWeight: 700,
    letterSpacing: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
});

class UserAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          expanded: false,
          loading: true,
          profile: null
        };
      }



    async componentDidMount() {
        fetch(`http://localhost:3000/junction/yourcsas`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('sessionToken')
            })
        }) .then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({ profile: data.csas, loading: false})

        }) .catch((err) => {
            console.log(err)
        })
            
        
    }

    


    render(){
    const { classes } = this.props;
    const sessionToken = localStorage.getItem('sessionToken')
    const handleExpandClick = () => {
        this.setState({expanded : !this.state.expanded});
    };

        return (
            <div>
            <Grid container spacing={8} className={classes.gridContainer}>

            {this.state.loading || !this.state.profile ? (<div>loading...</div>) : (


                this.state.profile.map((info, index) => {
                console.log(info)

                return(
                <React.Fragment>
                <Grid item>
                <Card className={classes.root}>

                <CardHeader
                    // avatar={
                    // <Avatar aria-label="recipe" className={classes.avatar}>
                    //     R
                    // </Avatar>
                    // }
                    action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                    title={info.csaName}
                    subheader= {info.firstName}
                />
                <CardMedia
                    className={classes.media}
                    image="/images/nature.svg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    {info.produce}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">

                    {/* <Button className={classes.joinCSA} onClick = {() => this.handleSubmit(info.id)}>Join this CSA</Button> */}

                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>About this CSA:</Typography>
                    <Typography paragraph>
                    {info.bio}
                    </Typography>
                    <Typography paragraph>Contact Info:</Typography>
                    <Typography paragraph>
                    Name: {info.firstName} {info.lastName}
                    <br/>
                    Email: {info.email}
                    </Typography>

                    </CardContent>
                </Collapse>
                </Card>
                </Grid>
                </React.Fragment>
                )
            }
            )

            
            
            
            )}
            </Grid>

            </div>
        );
    }

}

export default withStyles(useStyles)(UserAccount);
