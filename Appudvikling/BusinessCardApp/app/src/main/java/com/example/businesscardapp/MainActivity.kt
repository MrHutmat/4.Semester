package com.example.businesscardapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AlternateEmail
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Smartphone
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.sp
import com.example.businesscardapp.ui.theme.BusinessCardAppTheme
import org.intellij.lang.annotations.JdkConstants.HorizontalAlignment


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BusinessCardAppTheme {
                // A surface container using the 'background' color from the theme
                Surface(color = MaterialTheme.colors.background) {
                    ComposableBusinessCardApp()
                }
            }
        }
    }
}

@Composable
fun ComposableBusinessCardApp(

) {
    Surface(color = Color(0xFF4C5270), modifier = Modifier.fillMaxSize()) {
        Column(
            modifier = Modifier.fillMaxSize()
                .padding(16.dp),
            // horizontalAlignment = Alignment.CenterHorizontally,
           // verticalArrangement = Arrangement.SpaceAround,
        ) {
            InformationCard(
                fullName = stringResource(R.string.full_name),
                title = stringResource(R.string.title),
                modifier = Modifier.weight(1f),
            )
            ContactInfo(
                phoneNumber = stringResource(R.string.phone_number),
                email = stringResource(R.string.email),
                linkedInHandle = stringResource(R.string.linkedin_handle)
            )


        }
    }
}

@Composable
fun InformationCard(
    fullName: String,
    title: String,
    modifier: Modifier = Modifier

) {
    Column(
        modifier = modifier,
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally,
    ) {
        val image = painterResource(R.drawable.logonyt)
        Image(
            painter = image,
            contentDescription = null,
            modifier = Modifier
                .size(250.dp)
            )
        Text(
            text = fullName,
            fontSize = 35.sp
        )
        Text(
            text = title,
            fontWeight = FontWeight.Bold,
        )
    }

}

@Composable
fun ContactInfo(
    phoneNumber: String,
    email: String,
    linkedInHandle: String,
   // modifier: Modifier = Modifier
) {
    Column (

            ) {
        //Divider(color = Color.White, thickness = 2.dp, startIndent = 0.dp)

        Row(

        ) {
            Icon(
                imageVector = Icons.Default.Smartphone,
                contentDescription = null,
            )
            Text(
                text = phoneNumber
            )
        }
        //Divider(color = Color.White, thickness = 2.dp)
        Row {
            Icon(
                imageVector = Icons.Default.Email,
                contentDescription = null,
            )
            Text(
                text = email
            )
        }
        //Divider(color = Color.White, thickness = 2.dp)
        Row {
            Icon(
                imageVector = Icons.Default.AlternateEmail,
                contentDescription = null,
            )
            Text(
                text = linkedInHandle
            )
        }
    }
}




@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    BusinessCardAppTheme {
        ComposableBusinessCardApp()
    }
}