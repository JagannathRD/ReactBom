import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import webhome from './images/webhome.png'
import { useNavigate } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import NativeSelects from './BOMMainComponent'
import Button from '@material-ui/core/Button';
import BOMDragDrop from './BOMDragDrop';
import { color, height } from "@mui/system";
import image from './images/Bosch_logo.svg';
import { Navigate,Link } from "react-router-dom";
import { WithRouter } from "./WithRouter";
const drawerWidth = 220;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(0deg)"
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: "rotate(180deg)"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.unit,
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: 1
  }
});

class MiniDrawer extends React.Component {  
  constructor(){
    super()
    
  }
  // state = {
  //   open: false,
  //   anchorEl: null,

  // };
  state={
    redirect:false
  }
  

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  // componentDidMount(){
  //   this.props.navigation('/');
  // }
  
   goHome=()=>{
    if(window.location.pathname!=='/'){
    this.setState({redirect:true})
    // this.props.navigation.navigate('/compareView');
    console.log('hello bom tool');}
        
  }
  mLeave(e){
    e.target.style.color='#2e3033'
  

  }

  render() {
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const {navigation}=this.props
    
    

    return (
       <>
         
         { 
              this.state.redirect && <Navigate to='/' />
        }
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classes.appBar}
          fooJon={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
           <Box className="background-bosch-image" style={{ fontSize: '20px', fontWeight: "bold", 
           padding: '2px 7px', color: 'var(--bs-gray)' }}></Box>
          <Toolbar disableGutters={true} style={{backgroundColor:'white'}}>
          {/* <img src={webpagehome_85808} style={{position:'absolute',top:'80px',marginLeft:'20px',width:'20px'}} onClick={goHome}></img> */}
            {/* <IconButton
              color="gray"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon
                classes={{
                  root: this.state.open
                    ? classes.menuButtonIconOpen
                    : classes.menuButtonIconClosed
                }}
              />
            </IconButton> */}
            
            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}
              noWrap
              style={{color: '#2e3033',fontWeight:'bold',padding:'0px 0px 0px 48px'}}
              //onClick={this.oppp.bind(this)}
              //onMouseOver={(e)=>e.target.style.color='grey'}
              onMouseEnter={(e) => e.target.style.color='grey'}
              onMouseLeave={(e) => e.target.style.color='#2e3033'}
              onClick={this.goHome}
            >
              BOM Comparison Tool        

            </Typography>

            <Typography style={{color:'#2e3033'}}>
             {sessionStorage.getItem('user')}
            </Typography>
            <div>   
              <IconButton
                aria-owns={open ? "menu-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color='#2e3033'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose} style={{color:'#2e3033'}}>Profile</MenuItem>
                <MenuItem onClick={this.handleClose}>{sessionStorage.getItem('user')}</MenuItem>
              </Menu>
            </div>
            <img src={image} style={{width:'10%'}}></img>
        
          </Toolbar>
         
        </AppBar>
    
        {/* <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar} />
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        
        </Drawer> 
         */}
        <main className={classes.content} >
          <div className={classes.toolbar} />
          
          {/* <Typography paragraph>
            Existing BOMs are compared with Standard BOM
          </Typography>
          <Typography paragraph></Typography> */}

          {/* <NativeSelects/> */}
          
        
         
        </main>
       
      </div>
      {/* <footer style={{  left:'0',right:'0',bottom:'0',position:'fixed' }}>
    <Box sx={{ flexGrow: 1, marginTop: 15 }} className="footer footer-bosch-image"style={{float:'right',padding: '5px 7px', color: 'var(--bs-gray)' }}>
              © Bosch -	Property of Bosch Automotive Steering
            </Box>
            
            <Box className="background-bosch-image" style={{ fontSize: '20px', fontWeight: "bold", padding: '2px 7px', color: 'var(--bs-gray)', left:'0',right:'0',bottom:'0',position:'fixed' }}></Box>
            </footer> */}
      </>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
// export function WitRouter(props) {
//   const navigation = useNavigate();

//   return (<>
//   <MiniDrawer {...props} navigation={navigation} />
//   </>);
// }
export default withStyles(styles, { withTheme: true })(MiniDrawer);
