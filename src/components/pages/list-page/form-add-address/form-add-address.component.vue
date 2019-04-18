<template>
    <div id="formAddAddress">
        <el-dialog
            title="Add New Address"
            :visible.sync="showForm"
            width="70%">
            <span></span>
            <span slot="footer" class="dialog-footer">
                <el-button class="submit-button" @click="submit">Submit</el-button>
            </span>
        </el-dialog>
    </div>     
</template>
<script src="./form-add-address.component.js"></script>
<script src="./form-add-address.component.css" scoped></script>
