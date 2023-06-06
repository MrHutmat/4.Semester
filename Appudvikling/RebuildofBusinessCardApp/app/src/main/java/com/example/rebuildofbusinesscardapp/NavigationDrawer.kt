package com.example.rebuildofbusinesscardapp

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.RowScopeInstance.weight
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material3.DrawerValue
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.ModalDrawerSheet
import androidx.compose.material3.ModalNavigationDrawer
import androidx.compose.material3.NavigationDrawerItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.rememberDrawerState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.compose.NavHost
import kotlinx.coroutines.launch


@OptIn(ExperimentalMaterial3Api::class)


@Composable
fun NavigationDrawer(
    route: String,
    modifier: Modifier = Modifier,

) {
    val drawerState = rememberDrawerState(initialValue = DrawerValue.Closed)
    val scope = rememberCoroutineScope()
    
    ModalNavigationDrawer(
        drawerState = drawerState,
        drawerContent =  {
            ModalDrawerSheet(modifier = Modifier) {
                NavigationDrawerItem(
                    label = {
                            Text(
                                text = "Home",
                                style = MaterialTheme.typography.labelMedium
                            )
                    },
                    selected = route == /*TODO*/,
                    onClick = {
                              scope.launch { drawerState.close() }
                    },
                    icon = { Icon(imageVector = Icons.Default.Home, contentDescription = null)}
                )

                NavigationDrawerItem(
                    label = {
                        Text(
                            text = "Todo",
                            style = MaterialTheme.typography.labelMedium
                        )
                    },
                    selected = route == /*TODO*/,
                    onClick = {
                        scope.launch { drawerState.close() }
                    },
                    icon = { Icon(imageVector = Icons.Default.Home, contentDescription = null)}
                )
            }
        }
    ) {
        Scaffold(
            topBar = {
                TopAppBar(title = { Text(text = "Min App") },
                    modifier = Modifier.fillMaxWidth(),
                    navigationIcon = { IconButton(onClick = { }) {
                        scope.launch { drawerState.open() }
                    }, content = {
                            Icon(imageVector = Icons.Default.Menu, contentDescription = null)
                        }
                    }
                    ) {
                    
                }
            }
        ) {
            NavHost(navController = , graph = )
        }
        
    }
    
}