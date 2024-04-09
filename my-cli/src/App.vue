<template>
    <el-button text @click="dialogVisible = true">
      click to open the Dialog
    </el-button>
    <el-dialog
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :before-close="handleClose"
    >
      <span v-drag>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </template>
  
<script setup>
import "@/asset/index.less"
import {ElDialog} from 'element-plus';
import { ref,reactive } from "vue";
const dialogVisible = ref(false);
</script>
<style scoped></style>