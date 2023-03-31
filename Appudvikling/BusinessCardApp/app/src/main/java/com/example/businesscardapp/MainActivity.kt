package com.example.businesscardapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AlternateEmail
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material.icons.filled.Smartphone
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.businesscardapp.ui.theme.BusinessCardAppTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BusinessCardAppTheme {
                // A surface container using the 'background' color from the theme
                Surface(modifier = Modifier.fillMaxSize(), color = MaterialTheme.colors.background) {
                    ComposableBusinessCardApp()
                }
            }
        }
    }
}

@Composable
fun ComposableBusinessCardApp(

) {
    Column() {
        InformationCard(
            fullName = stringResource(R.string.full_name),
            title = stringResource(R.string.title)
        )
        ContactInfo(
            phoneNumber = stringResource(R.string.phone_number),
            email = stringResource(R.string.email),
            linkedInHandle = stringResource(R.string.linkedin_handle)
        )

    }
}

@Composable
fun InformationCard(
    fullName: String,
    title: String,
    modifier: Modifier = Modifier

) {
    Column() {
        val image = painterResource(R.drawable.logo)
        Image(
            painter = image,
            contentDescription = null,
            modifier = Modifier
                .clip(CircleShape)
                .size(72.dp)
            )
        Text(
            text = fullName
        )
        Text(
            text = title
        )
    }

}

@Composable
fun ContactInfo(
    phoneNumber: String,
    email: String,
    linkedInHandle: String,
    modifier: Modifier = Modifier
) {
    Column() {
    }
    Row() {
        Icon(
            imageVector = Icons.Default.Smartphone,
            contentDescription = null,
        )
        Text(
            text = phoneNumber
        )
    }
    Row() {
        Icon(
            imageVector = Icons.Default.Email,
            contentDescription = null,
        )
        Text(
            text = email
        )
    }
    Row() {
        Icon(
            imageVector = Icons.Default.AlternateEmail,
            contentDescription = null,
        )
        Text(
            text = linkedInHandle
        )
    }
}




@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    BusinessCardAppTheme {
        ComposableBusinessCardApp()
    }
}