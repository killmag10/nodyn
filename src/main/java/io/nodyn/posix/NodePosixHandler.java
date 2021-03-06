/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.nodyn.posix;

import jnr.constants.platform.Errno;
import jnr.posix.POSIXHandler;

import java.io.File;
import java.io.InputStream;
import java.io.PrintStream;

/**
 * Customized handler for jnr-posix.
 */
public class NodePosixHandler implements POSIXHandler {
    @Override
    public void error(Errno errno, String s) {

    }

    @Override
    public void error(Errno errno, String s, String s2) {

    }

    @Override
    public void unimplementedError(String s) {

    }

    @Override
    public void warn(WARNING_ID warning_id, String s, Object... objects) {

    }

    @Override
    public boolean isVerbose() {
        return false;
    }

    @Override
    public File getCurrentWorkingDirectory() {
        return new File(System.getProperty("user.dir"));
    }

    @Override
    public String[] getEnv() {
        return new String[0];
    }

    @Override
    public InputStream getInputStream() {
        return null;
    }

    @Override
    public PrintStream getOutputStream() {
        return null;
    }

    @Override
    public int getPID() {
        return 0;
    }

    @Override
    public PrintStream getErrorStream() {
        return null;
    }
}
