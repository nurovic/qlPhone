import React, {useState} from 'react';
import {View, TextInput, Text, Button, SafeAreaView} from 'react-native';

function index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = () => {
    // Form verilerini işleme kodu burada yer alır
    console.log('Kullanıcı Adı:', username);
    console.log('Parola:', password);
    console.log('E-posta:', email);
    console.log('Miktar:', quantity);
    console.log('Abonelik Durumu:', subscribe);
  };

  return (
    <SafeAreaView>
      {/* Metin Girişi (TextInput) */}
      <Text>Kullanıcı Adı:</Text>
      <TextInput
        placeholder="Kullanıcı Adı"
        onChangeText={text => setUsername(text)}
        value={username}
      />

      {/* Parola Girişi (TextInput secureTextEntry ile gizlenir) */}
      <Text>Parola:</Text>
      <TextInput
        placeholder="Parola"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />

      {/* E-posta Girişi (TextInput) */}
      <Text>E-posta:</Text>
      <TextInput
        placeholder="E-posta"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />

      {/* Sayı Girişi (TextInput) */}
      <Text>Miktar:</Text>
      <TextInput
        placeholder="Miktar"
        onChangeText={text => setQuantity(text)}
        value={quantity}
        keyboardType="numeric"
      />

      {/* Onay Kutusu (CheckBox) */}

      <Button title="Gönder" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

export default index;
