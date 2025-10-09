import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const [nomeError, setNomeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [senhaError, setSenhaError] = useState('');
  const [confirmarSenhaError, setConfirmarSenhaError] = useState('');
  const [telefoneError, setTelefoneError] = useState('');

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validarTelefone(telefone) {
    return /^\d{8,15}$/.test(telefone);
  }

  function handleRegister() {
    let valid = true;
    setNomeError('');
    setEmailError('');
    setSenhaError('');
    setConfirmarSenhaError('');
    setTelefoneError('');

    if (nome.trim().length < 3) {
      setNomeError('Digite seu nome completo');
      valid = false;
    }
    if (!validarEmail(email)) {
      setEmailError('E-mail inválido');
      valid = false;
    }
    if (senha.length < 6) {
      setSenhaError('A senha deve ter pelo menos 6 caracteres');
      valid = false;
    }
    if (senha !== confirmarSenha) {
      setConfirmarSenhaError('As senhas não coincidem');
      valid = false;
    }
    if (!validarTelefone(telefone)) {
      setTelefoneError('Telefone inválido (apenas números, 8 a 15 dígitos)');
      valid = false;
    }

    if (valid) {
      navigation.navigate('Dados', {
        nome,
        email,
        telefone
      });
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
      />
      {nomeError ? <Text style={styles.error}>{nomeError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      {senhaError ? <Text style={styles.error}>{senhaError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
      />
      {confirmarSenhaError ? <Text style={styles.error}>{confirmarSenhaError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={text => setTelefone(text.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
        maxLength={15}
      />
      {telefoneError ? <Text style={styles.error}>{telefoneError}</Text> : null}

      <Button title="Cadastrar" onPress={handleRegister} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, marginBottom: 24, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 12, marginBottom: 8 },
  error: { color: 'red', marginBottom: 8 }
});